import "./app-info.css";

const AppInfo = ({ allCountEmpoyees, increaseEmployees }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании </h1>
            <h2>Общее число сотрудников: {allCountEmpoyees}</h2>
            <h2>Премию получат: {increaseEmployees}</h2>
        </div>
    )
}

export default AppInfo;