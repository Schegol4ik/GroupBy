import './App.scss';
import React, {useMemo, useState} from "react";


const App = () => {

    const heroes = [
        {id: 1, universe: "marvel", name: "Spider Man"},
        {id: 2, universe: "marvel", name: "Iron Man"},
        {id: 3, universe: "dc", name: "Aqua Man"},
        {id: 4, universe: "dc", name: "Bat Man"},
        {id: 5, universe: "marvel", name: "Hulk"}
    ]
    const cars = [
        {id: 1, mark: "AUDI", model: "Rs"},
        {id: 2, mark: "AUDI", model: "80"},
        {id: 3, mark: "Skoda", model: "Octavia"},
        {id: 4, mark: "Skoda", model: "Rapid"},
        {id: 5, mark: "Opel", model: "Vectra"},
        {id: 6, mark: "Opel", model: "Omega"},
    ]
    const keysArr = ['id','universe','name','mark','model']
    const arrNames = ['cars','heroes']

    const [valueKey, setValueKey] = useState('')
    const [valueArray, setValueArray] = useState('')
    const [groupItem, setGroupItem] = useState(null)

    const changeArray = useMemo(() => {
        switch (valueArray) {
            case "cars":
                return cars
            case "heroes":
                return heroes
        }
    }, [valueArray])

    const groupBy = (items, str) => {
        const groupItems = {};
        items.forEach((item) => {
            if (item[str] in groupItems) {
                return groupItems[item[str]].push(item);
            }
            groupItems[item[str]] = [item];
        });
        return groupItems;
    };


    const handleGroupItem = () => {
            if(keysArr.includes(valueKey) && arrNames.includes(valueArray)){
                const group = groupBy(changeArray, valueKey)
                setGroupItem(group)
            }else {
                return alert('Проверьте правильность написания ключа или массива')
            }

    }


    return (
        <div className='wrapper'>
            <div className='arrays'>
                <div className='arrHero'>
                <h2>heroes</h2>
                {heroes.map(group => <div>id:{group.id} universe:{group.universe} name:{group.name}</div>)}
                </div>
                <div>
                <h2>cars</h2>
                {cars.map(group => <div>id:{group.id} mark:{group.mark} model:{group.model}</div>)}
                </div>
            </div>
            <div>
                 <span>Выбирите массив для группировки : <input
                     onChange={e => setValueArray(e.target.value)}
                 /></span>
                <span>Введите ключ для группировки : <input
                    onChange={e => setValueKey(e.target.value)}
                /></span>
                <button onClick={handleGroupItem}>Сгруппировать</button>
            </div>
            <div>
                {groupItem && <div>
                    {
                        Object.keys(groupItem).map((key, i) => (
                                <p key={i}>
                                    <span>{key}: </span>
                                    <span>{"["} {groupItem[key].map(item => <span>{"{"}
                                        {Object.keys(item).map((k) => <span>{k}: {item[k]},</span>)}
                                        {"},"}</span>)} {"]"},
                        </span>
                                </p>
                            )
                        )
                    }

                </div>}
            </div>
        </div>
    );
}

export default App;
