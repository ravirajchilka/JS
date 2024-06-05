function Header() {
    let ar = ["a"];
    const list = ar.map((item,ind)=>{
        return (
            <li>
            <ul>{item.toUpperCase()}</ul>
            </li>
            );
    });

    return (
        <>
        <h2>teting data now adding </h2>
        {list}
        </>
    );
}

export default Header
