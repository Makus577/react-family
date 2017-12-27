import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
    <div>Home</div>
)
const Product = () => (
    <div>Product</div>
)
// const Category = () => (
//     <div>Category</div>
// )
class Category extends Component {
    constructor() {
        super()
    }
    render() {
        const { match } = this.props
        console.log(match)
        const categorys = [
           { name: 1, num: '1'},
           { name: 2, num: '2'},
           { name: 3, num: '3'},
           { name: 4, num: '4'},
        ]
        return (
            <div>
                <ul>
                    {categorys.map((category, index) => {
                        return <li key={index}><Link to={`${match.path}/${category.name}`}>{category.num}</Link></li>
                    })}
                </ul>
                <Route path={`${match.path}/:name`} render={({match}) => (<div>{match.params.name}</div>)}></Route>
            </div>
        )
    }

}


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    render() {
        return (
           <Router>
               <div>
                   <ul>
                       <li>
                           <Link to='/'>Home</Link>
                       </li>
                       <li>
                           <Link to='/product'>Product</Link>
                       </li>
                       <li>
                           <Link to='/category'>Category</Link>
                       </li>
                   </ul>

                   <Route exact path='/' component={Home}></Route>
                   <Route path='/product' component={Product}></Route>
                   <Route path='/category' component={Category}></Route>
               </div>
           </Router>
        )
    }
}