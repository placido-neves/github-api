import './styled.scss'

const MAX_ITENS = 9
const MAX_LEFT = (MAX_ITENS - 1) / 2

export default function Pagination({ limit, total, offSet, setOffSet }) {
    const current = offSet ? (offSet / limit) + 1 : 1
    const pages = Math.ceil(total / limit)
    const first = Math.max(current - MAX_LEFT, 1)
    return (
        <ul className='pagination'>
            {
                Array.from({ length: Math.min(MAX_ITENS, pages) }).map((_, index) =>
                    (index + first)).map(page => (
                        <li key={page}>
                            <button  className={page === current ? "pagination-active" : 'pagination-deactive'}
                                onClick={() => { setOffSet((page - 1) * limit) }}>{page}</button>
                        </li>
                    ))
            }
        </ul>
    )
}