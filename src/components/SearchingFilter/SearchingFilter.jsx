import React from 'react';
import { SearchingWrapper, FilterField, FilterHeader, Dot } from 'components/SearchingFilter/SearchingFilter.styled';


export const SearchingFilter = ({onFilterField}) => {   

   

    return (
        <SearchingWrapper>
            <FilterHeader>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </FilterHeader>
            Find contacts by Name
            <FilterField onChange={(event) => {
                onFilterField(event.target.value)   
            }}></FilterField>
        </SearchingWrapper>
    );
};

