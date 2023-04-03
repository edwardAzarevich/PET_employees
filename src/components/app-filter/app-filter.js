import { Component } from "react";
import "./app-filter.css";



const AppFilter = (props) => {
    const buttonData = [
        { name: 'all', label: 'Все сотрудники', colorup: false },
        { name: 'rise', label: 'На повышение', colorup: false },
        { name: 'moreThen1000', label: 'З/П больше 1000$', colorup: true }
    ];

    const buttons = buttonData.map(({ name, label, colorup }) => {
        const acrive = props.filter === name;
        const clazz = acrive ? 'btn-light' : 'btn-outline-ligh';
        const style = colorup ? { color: 'green' } : null;
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;