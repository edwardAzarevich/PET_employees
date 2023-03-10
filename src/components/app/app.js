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
                { name: 'Jodd2', salary: 8400, increase: true, rise: false, id: 2 },
                { name: 'Jon3', salary: 300, increase: false, rise: false, id: 3 },
            ]
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

    onToggleIncrease = (id) => {

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, rise: !item.rise }
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
    render() {
        const allCountEmpoyees = this.state.data.length,
            increaseEmployees = this.state.data.filter(employees => employees.increase).length;
        return (
            <div className="app">
                <AppInfo allCountEmpoyees={allCountEmpoyees} increaseEmployees={increaseEmployees} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm
                    onAddItem={this.addItem} />
            </div>
        );
    }
}

export default App;
