import React from 'react';
import { useParams } from 'react-router-dom';
import Admin from './Admin';

export default function Member() {
    // const { search } = useLocation();
    // const match = search.match(/type=(.*)/);
    // const type = match?.[1];
    const { type } = useParams();

    return (
        <>
        <h2>Member</h2>
        {type === 'admin' && <Admin />}
        </>
    );
}