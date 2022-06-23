import { useState, useEffect } from "react"

import Seach from "../../Components/Seach"
import List from "../../Components/List"
import Pagination from "../../Components/Pagination"

import api from "../../API"

import "./styled.scss"


export default function Home() {
    const [result, setResult] = useState({})
    const [offSet, setOffSet] = useState(0)
    const [seach, setSeach] = useState('')

    let number = (offSet / 30) + 1

    useEffect(() => {
        handleChange()
        // eslint-disable-next-line 
    }, [offSet])

    async function handleChange() {
        const response = await api.get(`/search/repositories?q=${seach}&page=${number}`)
        setResult(response)
    }

    return (
        <div>
            <header >
                <h1 className="txt-seach">Seach Github</h1>
            </header>
            <section >
                <div className="top-bar">
                    <h2>Pesquisa de Repositorios no Github</h2>
                    <div className="seacher">
                        <Seach
                            value={seach}
                            setValues={setSeach}
                            placeholder='pesquise aqui'
                            handleChange={handleChange}
                        />
                    </div>
                </div>
                {result.data &&
                    (<Pagination offSet={offSet} setOffSet={setOffSet} total={result.data?.total_count} limit={30} />)
                }
                <List data={result?.data} />
            </section>
        </div>

    )
}

