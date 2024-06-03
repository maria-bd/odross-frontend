export const format = (statistics) => {
    return [
        { name: 'Learners', value: statistics.learner_count },
        { name: 'Quizzes', value: statistics.quiz_count },
        { name: 'Enrollments', value: statistics.is_enrolled_count },
    ];
};
