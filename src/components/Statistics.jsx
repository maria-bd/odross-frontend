// src/components/Statistics.js
import React, { useEffect, useState } from 'react';
import { fetchStatistics } from './statisticsService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell,  PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import { formatStatistics } from './formatStatistics';
import './Statistics.css'; // Import the CSS file
import NavbarAdmin from './NavbarAdmin';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C', '#D0ED57', '#8884D8', '#82CA9D', '#FFBB28', '#FF8042', '#0088FE'];

const Statistics = () => {
    const [statistics, setStatistics] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formattedData, setFormattedData] = useState([]);

    useEffect(() => {
        const getStatistics = async () => {
            try {
                const data = await fetchStatistics();
                setStatistics(data);
                setFormattedData(formatStatistics(data));
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getStatistics();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading statistics: {error.message}</p>;

    return (
        <div>
            <NavbarAdmin />
        <div className="statistics">
            <h2>Statistics</h2>
            <div>
            <div className="chart-container">
                <div className="">
                    <h3>Number of Learners</h3>
                    <h1>{statistics.learner_count}</h1>
                </div>
            </div>
            <div className="chart-container">
                <div className="">
                    <h3>Number of Instructors</h3>
                    <h1>{statistics.instructor_count}</h1>
                </div>
          </div>
          <div className="chart-container">
                <div className="">
                    <h3>Number of Learners who passed a Quiz</h3>
                    <h1>{statistics.is_enrolled_count}</h1>
                </div>
          </div>
          </div>
            <div className="chart-container">
                <h3 className="chart-title">Bar Chart</h3>
                              <BarChart width={600} height={300} data={formattedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill={COLORS[0]} name="" />
                </BarChart>
            </div>
            <div className="chart-container">
                <h3>Videos and Quizzes</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        data={[
                            { name: 'Videos', value: statistics.video_count },
                            { name: 'Quizzes', value: statistics.quiz_count }
                        ]}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {[
                            { name: 'Videos', color: COLORS[0] },
                            { name: 'Quizzes', color: COLORS[1] }
                        ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="chart-container">
                <h3>Domain, Training, Lesson</h3>
                <PieChart width={500} height={500}>
                    <Pie
                        data={[
                            { name: 'Domains', value: statistics.domain_count },
                            { name: 'Trainings', value: statistics.training_count },
                            { name: 'Lessons', value: statistics.lesson_count }
                        ]}
                        cx={250}
                        cy={250}
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {[
                            { name: 'Domain', color: COLORS[7] },
                            { name: 'Training', color: COLORS[3] },
                            { name: 'Lesson', color: COLORS[2] }
                        ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
       </div>
    );
};

export default Statistics;