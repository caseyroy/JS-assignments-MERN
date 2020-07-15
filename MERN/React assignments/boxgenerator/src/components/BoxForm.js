import React, { useState } from 'react';

const BoxForm = (props) => {
    // const { box, setBox } = props
    const [color, setColor] = useState("");
    const [size, setSize] = useState();
    const [box, setBox] = useState([])


    const createBox = (e) => {
        e.preventDefault();
        const newBox = (color, size);
        setBox([...box, newBox])
    };
    return (
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color </label>
                    <input
                        type="text"
                        name="color"
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <label>Size </label>
                    <input
                        type="number"
                        name="size"
                        onChange={(e) => setSize(e.target.value)}
                    />
                    <button>Add</button>
                </div>
            </form>
            <div>
                {
                    box.map((thisBox, idx) => {
                        const style = {
                            backgroundColor: box.color, height: box.size + "px", width: box.size + "px"
                        };
                        return (
                            <div key={idx} style={style}></div>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default BoxForm;