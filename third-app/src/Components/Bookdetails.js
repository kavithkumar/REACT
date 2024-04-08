import { useState } from "react";

function BookDetails() {
    let [books, setBooks] = useState([{ 'title': 'React', 'author': 'james', 'price': 3500 },
    { 'title': 'Javascript', 'author': 'jack', 'price': 2500 },
    { 'title': 'Java', 'author': 'clara', 'price': 500 },
    { 'title': 'Html and Css', 'author': 'casey', 'price': 1500 },
    { 'title': 'JDBC', 'author': 'smith', 'price': 900 },
    { 'title': 'MongoDB', 'author': 'ash', 'price': 1100 },
    { 'title': 'Postgresql', 'author': 'blaze', 'price': 2100 }
    ])
    
    const sortByAuthor=()=>{
        let toBeSorted=[...books]
        toBeSorted.sort((b1,b2)=>b1.author>b2.author? 1 : -1)
        setBooks(toBeSorted)
    }
    const sortByPrice=()=>{
        let toBeSorted=[...books]
        toBeSorted.sort((b1,b2)=>b1.price-b2.price)
        setBooks(toBeSorted)
    }

    // SORTED ONLY IN CONSOLE
    // const sortByAuthor = () => {
    //     books.sort((b1, b2) => b1.author > b2.author ? 1 : -1)
    //     console.log(books)
    //     setBooks(books);
    // }

    // const sortByPrice = () => {
    //     books.sort((b1, b2) => b1.price - b2.price)
    //     console.log(books)
    //     setBooks(books);
    // }

    return (<>
        <table className="table table-striped">
            <thead>
                <caption>Book Details</caption>
                <tr>
                    <th>Title</th>
                    <th onClick={sortByAuthor}>Author</th>
                    <th onClick={sortByPrice}>Price</th>
                </tr>
            </thead>
            <tbody>
                {books.map((b, index) => (
                    <tr key={index}>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                        <td>{b.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>);
}
export default BookDetails