import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ListIssue from '../../Components/ListIssue'

import api from "../../API"

import "./styled.scss"

export default function Issue() {
    const { repos,user } = useParams()
    const [result, setResult] = useState({})

    useEffect(() => {
        api.get(`https://api.github.com/search/issues?q=repo:${user+'/'+repos}`).then(data => {
            setResult(data)
        })
        // eslint-disable-next-line
    }, [repos])

    return (
        <>
            <header className="header-issue" >
                <a href="/" className="txt-seach">Back</a>
            </header>
            <div className="space">
                <ListIssue data={result?.data} />
            </div>
        </>
    )
}