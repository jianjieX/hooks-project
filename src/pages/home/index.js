import React, { useState ,useEffect} from 'react';
import styles from './index.module.css';
const Example=function Example() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    useEffect(()=>{
        let timer=setInterval(()=>{
            setCount(count+1)
        },500)
        return ()=>{clearInterval(timer)}
    })
    return (
        <div className={styles.container}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
export default Example;
