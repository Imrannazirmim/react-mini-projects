import useFetch from "./components/custom hooks/useFetch.jsx";

const App = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')
    return (
        // <UserProvider>
        //     {/* <Todos/> */}
        //     {/* <Profile/> */}
        //     {/* <ShopingList/> */}
        //     {/* <CopyInput/> */}
        //     {/* <Switcher/> */}
        //     <UserProfile/>
        //     <UpdateUser/>
        //     {/* <UserReducer/> */}
        //     <Counter/>
        //     <TimerCounter/>
        // </UserProvider>
        <div>
            <ul>
                {data && data.map((item) => {
                    return <p key={item.id}>{item.title}</p>
                })}
            </ul>
        </div>
    )
}
export default App
