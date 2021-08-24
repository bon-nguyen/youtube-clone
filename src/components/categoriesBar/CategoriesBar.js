import React from 'react';
import './_categoriesBar.scss';

const keywords = [
    'All',
    'React js',
    'React Native',
    'Angular js',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Sheath',
]
const CategoriesBar = () => {
    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => (
                <span
                    key={i}
                >
                    {value}
                </span>
            ))}
        </div>
    );
};

export default CategoriesBar; 