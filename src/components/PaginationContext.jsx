import * as React from 'react';

export const PaginationContext = React.createContext();

export const PaginationContextProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = React.useState(1);

    const handlePageChange = (num) => {
        setPageNumber(num);
    }

    return (
        <PaginationContext.Provider value={{ pageNumber, handlePageChange }}>
            {children}
        </PaginationContext.Provider>
    );
}

export const usePagination = () => {
    const context = React.useContext(PaginationContext);
    if (!context) {
        throw new Error('usePagination must be used within a PaginationContextProvider');
    }
    return context;
}

