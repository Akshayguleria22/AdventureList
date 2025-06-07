import { React, useState, useEffect } from 'react'

const Card = () => {
    const [adventure, setAdventure] = useState("");
    const [Adventures, setAdventures] = useState([]);
    const [showFinishedOnly, setShowFinishedOnly] = useState(false);
    const SaveToLs= (adventures) => {
        localStorage.setItem("adventures", JSON.stringify(adventures));
    }
    const HandleClick = () => {
        setAdventures([...Adventures,{name:adventure, IsFinished: false}]);
        setAdventure("");
        SaveToLs([...Adventures, { name: adventure, IsFinished: false }]);
    }
    const HandleChange = (e) => {
        setAdventure(e.target.value);
    }
    const HandleEdit = (e) => {
        const adventureName = e.currentTarget.parentElement.previousSibling.textContent;
        e.currentTarget.parentElement.parentElement.remove();
        setAdventure(adventureName);
        SaveToLs(Adventures.filter(adventure => adventure.name !== adventureName));
    }
    const HandleDelete = (e) => {
        e.currentTarget.parentElement.parentElement.remove();
        SaveToLs(Adventures.filter(adventure => adventure.name !== e.currentTarget.parentElement.previousSibling.textContent));
    }
    const HandleFinished = () => {
        setShowFinishedOnly(!showFinishedOnly);
    }
    const HandleDone = (index) => {
        const updatedadventures = Adventures.map((adventure, i) => {
            if (i === index) {
                return { ...adventure, IsFinished: !adventure.IsFinished };

            }
            return adventure;
        });
        setAdventures(updatedadventures);
        SaveToLs(updatedadventures);
    }
    useEffect(() => {
        const storedAdventures = localStorage.getItem("adventures");
        setAdventures(storedAdventures ? JSON.parse(storedAdventures) : []);
    }, []);
    return (
        <div className="bg-white shadow-md rounded-lg p-6 relative w-full sm:w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-8">
            <div className="flex flex-col border-b-1 items-center mb-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Welcome Nakama!!! Set your Adventures for Today</h1>
                <label className="text-lg font-semibold text-start">Add The Adventure!!</label>
                <div className="flex flex-row p-2 justify-between w-full items-center">
                    <input type="text" onChange={HandleChange} className="w-full p-2 border-black rounded-4xl border-2" value={adventure} placeholder="Enter adventure" />
                    <button onClick={HandleClick} disabled={adventure.length<3} className="text-white border disabled:bg-purple-300 border-black hover:cursor-pointer m-1 rounded-3xl w-15 h-10 bg-purple-700">Save</button>
                </div>
                <div className="flex flex-row m-8 items-center justify-start w-full">
                    <input onClick={HandleFinished} type="checkbox" checked={showFinishedOnly} className="m-1" />
                    <label>Finished Adventures</label>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-4">Your Adventures</h2>
            <div className="flex flex-col items-center">
                {Adventures.map((adventure, index) => (
                    (showFinishedOnly && !adventure.IsFinished) ? null :
                        <div key={index} className="flex flex-row m-2  items-center justify-between w-full">
                        <div>
                            <input onChange={()=>HandleDone(index)} checked={adventure.IsFinished} type="checkbox" className="m-1" />
                            <label>{adventure.name}</label>
                        </div>
                        <div className="flex flex-row items-center justify-between ">
                            <button onClick={HandleEdit} className="bg-purple-400 h-8 w-10 m-1 flex border rounded-3xl justify-center items-center hover:cursor-pointer"><img className="h-6" src="src/assets/6543495.png" alt="edit" /></button>
                            <button onClick={HandleDelete} className="bg-purple-400 h-8 w-10 m-1 flex justify-center border rounded-3xl items-center hover:cursor-pointer"><img className="h-6" src="src/assets/delete.png" alt="delete" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Card
