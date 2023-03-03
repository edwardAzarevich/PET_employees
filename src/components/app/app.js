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
                { name: 'Jon1', salary: 800, increase: false, id: 1 },
                { name: 'Jodd2', salary: 8400, increase: true, id: 2 },
                { name: 'Jon3', salary: 300, increase: false, id: 3 },
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
    addItem = ({ name, salary }) => {
        this.setState(({ data }) => {
            const newArr = data.slice(0);
            newArr.push({ name: name, salary: salary, id: this.maxId });
            this.maxId += 1;
            return {
                data: newArr
            }
        })
        console.log(salary);
    }
    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                    onAddItem={this.addItem} />
            </div>
        );
    }
}

export default App;
