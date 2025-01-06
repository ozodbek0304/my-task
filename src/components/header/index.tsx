import { ReactNode } from "react"
import ParamInput from "../param/input"
import HeaderTop from "./header-top"
import HeaderBottom from "./header-bottom"


export default function Header() {
    return (
        <header className="shadow-sm">
            <main>
                <HeaderTop />
                <HeaderBottom/>
            </main>
        </header>
    )
}
