import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Jon1', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Sodd2', salary: 8400, increase: true, rise: false, id: 2 },
                { name: 'Jon3', salary: 300, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'rise'
        }
        this.maxId = 4;

    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            const newArr = data.filter(item => item.id !== id);
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    addItem = ({ name, salary }) => {

        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onSalaryMore1000 = (items) => {
        return items.filter(item => item.salary > 1000)
    }

    onForPromotion = () => {
        this.setState(({ data }) => {
            const newArrayForIncrease = data.filter((item) => item.rise);

            console.log(newArrayForIncrease);
            return {
                data: newArrayForIncrease
            }
        })
    }

    onAllEmployees = () => {
        this.setState(({ data }) => {
            const newArrayForIncrease = data.filter((item) => item.rise);

            console.log(newArrayForIncrease);
            return {
                data: newArrayForIncrease
            }
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.selery > 1000);
            default:
                return items
        }
    }


    render() {
        const { data, term, filter } = this.state,
            allCountEmpoyees = this.state.data.length,
            increaseEmployees = this.state.data.filter(employees => employees.increase).length,
            visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo allCountEmpoyees={allCountEmpoyees} increaseEmployees={increaseEmployees} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onSalaryMore1000={this.onSalaryMore1000} onForPromotion={this.onForPromotion} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAddItem={this.addItem} />
            </div>
        );
    }
}

export default App;
