import './styled.scss'

export default function List({ data }) {  
        return (
        <div className='container'>
            {
                data?.items.map((dt) => (
                    <div key = {dt.id}>
                        <div className='row' data-testid = "row">
                            <div className='container-img'>
                                <img src={dt.owner.avatar_url} alt="" />
                            </div>
                            <div className='txt'>
                                <div className='name-txt'>
                                    <h4>Name Repository: {dt.name}</h4>
                                    <h4>Full Name: {dt.full_name}</h4>
                                    <h4>Name Create: {dt.owner.login}</h4>
                                </div>
                                <p>Description: {dt.description !== null ? dt.description : "Does Not Exist"}</p>
                                <div className='links'>
                                    <a href={dt.owner.html_url} rel="noreferrer" target="_blank">Profile Link</a>
                                    <a href={dt.html_url} rel="noreferrer" target="_blank">Repository Link</a>
                                </div>
                                <div className='thigs'>
                                    <div className='gap'>
                                        <h5 className='fork'>fork: {dt.forks}</h5>
                                        <h5 className='whatchers'>watchers: {dt.watchers} </h5>
                                        <h5 className='oI'>Open Issues: {dt.open_issues}</h5>
                                    </div>
                                    <a href={`/issue/${dt.full_name}`} className='btn-issue' >See Issue</a>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}