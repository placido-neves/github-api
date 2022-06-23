import './styled.scss'

export default function ListIssue({ data }) {
    return (
        <div className='container'>
            {
                data?.items.map((dt) => (
                    <div key={dt.id}>
                        <div className='row' data-testid="row">
                            <div className='container-img'>
                                <img src={dt.user?.avatar_url} alt="" />
                            </div>
                            <div className='txt'>
                                <div className='name-txt'>
                                    <h4>Title: {dt.title}</h4>
                                    <h4>Number: {dt.number}</h4>
                                </div>
                                <p>{dt.body}</p>
                                <div className='links'>
                                    <a href={dt.url} rel="noreferrer" target="_blank" >Url issue</a>
                                    <a href={dt.user?.url} rel="noreferrer" target="_blank" >Url issue user</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {data?.items?.length === 0 && 
                    <h1>Não Existe issue </h1>
                }
        </div>
    )
}