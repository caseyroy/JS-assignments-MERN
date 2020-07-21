import React from 'react'

const ListComponent = (props) => {
    const { list, setList } = props

    const handleDelete = (delIdx) => {
        const filteredList = list.filter((_, idx) => {
            return idx !== delIdx;
        })
        setList(filteredList);
    };
    const isChecked = (updatedIdx) => {
        const updatedList = list.map((item, idx) => {
            if (idx === updatedIdx) {
                return { ...item, isAquired: !item.isAquired };
            }
            return item;
        });
        setList(updatedList)
    }

    return (
        <div id="taskList">
            {
                list.map((item, idx) => {
                    const labelStyle = { textDecoration: "none" };

                    if (item.isAquired) {
                        labelStyle.textDecoration = "line-through";
                    }
                    return (
                        <div key={idx}>
                            <label style={labelStyle} >{item.name}</label>
                            <input onChange={(event) => { isChecked(idx) }} type="checkbox" checked={item.isAquired} />
                            <button onClick={(event) => { handleDelete(idx); }}>Delet Set</button>
                        </div>
                    )
                })}
        </div>
    )

}
export default ListComponent;