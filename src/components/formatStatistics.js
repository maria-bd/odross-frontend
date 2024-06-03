// src/utils/formatStatistics.js
export const formatStatistics = (statistics) => {
    return [
        { name: 'App Users', value: statistics.app_user_count },
        { name: 'Domains', value: statistics.domain_count },
        { name: 'Instructors', value: statistics.instructor_count },
        { name: 'Learners', value: statistics.learner_count },
        { name: 'Trainings', value: statistics.training_count },
        { name: 'Lessons', value: statistics.lesson_count },
        { name: 'Videos', value: statistics.video_count },
        { name: 'Quizzes', value: statistics.quiz_count },
        { name: 'Questions', value: statistics.question_count },
        { name: 'Answers', value: statistics.answer_count },
        { name: 'Enrollments', value: statistics.is_enrolled_count },
    ];
};
