"use client"
import React, { useEffect } from 'react'

function NewsPage() {
    // Get news from any api
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // get news from /api/news
    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

       return (
            <ul className="divide-y divide-gray-200">
                {
                    news.map((item, index) => (
                        <li key={index} className="py-4 flex">
                            <img className="h-10 w-10 rounded-full" src={item.urlToImage} alt="" />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                    <time dateTime="2023-10-23">{item.publishedAt}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{item.author}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
    )




}

export default NewsPage