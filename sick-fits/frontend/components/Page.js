import Header from "./Header.js";


export default function Page({ children }) {
    return (
        <>
            <Header/>
           { children }
        </>
    )
}
