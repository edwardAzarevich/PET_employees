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


    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
            const newArr = data.filter(item => item.i !== id)
            return {
                data: newArr
            }
            console.log(index);
        })
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
                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;
