import { Component } from 'react';
//import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        if (e.target.name !== '' && e.target.value !== '')
            this.setState({
                [e.target.name]: e.target.value
            })
    }

    onAddEmployees = (e) => {
        e.preventDefault();
        const { onAddItem } = this.props;
        onAddItem(this.state);
        console.log(this.state);

    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        onClick={this.onAddEmployees}
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;