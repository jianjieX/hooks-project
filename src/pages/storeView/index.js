import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
const Index=()=>{
    return(
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
            <div>
                <Link to={'/home'}>进入hooks!!!!!!!!!!!!!</Link>
            </div>
        </div>
    )
}
export default Index;