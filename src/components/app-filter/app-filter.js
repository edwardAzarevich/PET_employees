import { Component } from "react";
import "./app-filter.css";



class AppFilter extends Component {
    constructor(props) {
        super();
    }

    onClickAllEmployees = () => {

    }

    onClickUpdateEmployess = () => {
        this.props.onForPromotion();
    }

    onClickSalaryMore1000 = (e) => {
        this.props.onSalaryMore1000();
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                    className="btn btn-light">
                    Все сотрудники
                </button>
                <button type="button"
                    className="btn btn-outline-light"
                    onClick={this.onClickUpdateEmployess}>
                    На повышение
                </button>
                <button type="button"
                    className="btn btn-outline-light"
                    onClick={this.onClickSalaryMore1000}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;