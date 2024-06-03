// Profile.jsx
import React from 'react';
import DomainTable from './DomainTable';
import TrainingTable from './TrainingTable';
import NavbarAdmin from './NavbarAdmin';


const Courses = () => {
    return (
        <div>
            <NavbarAdmin />
            <DomainTable />
            <TrainingTable />
        </div>
    );
};
export default Courses;
