import React from 'react';

const FormComponent = (props) => {
    const { katanaSet, setKatanaSet, list, setList } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list, { name: katanaSet, isAquired: false }]);
        setKatanaSet("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={(event) => {
                    setKatanaSet(event.target.value);
                }}
                    type="text"
                    value={katanaSet}
                /><br />
                <button>Add Set</button><br />
                <label>Katana Sets Not Aquired</label>
                <hr />
            </div>
        </form>
    )
}

export default FormComponent;