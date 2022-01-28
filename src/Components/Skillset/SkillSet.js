import React, { useContext } from 'react';
import { ThemeContext } from "../../Context/theme";
import { CardText, CardSub, ProgressBar, ProgressPercent } from '../Styled_Components/styles';
const SkillSet = () => {
    const skillset = [
        { key: 1, skill: 'React Native', color: "#6a1b9a", percent: 80 },
        { key: 2, skill: 'ReactJs', color: "#00695c", percent: 65 },
        { key: 3, skill: 'HTML & CSS', color: "#ef6c00", percent: 70 },
        { key: 4, skill: 'Javascript', color: "#4eb8a1", percent: 80 },
        { key: 5, skill: 'Typescript', color: "#bd3bc2", percent: 75 },
    ];
    const [{ isDark }] = useContext(ThemeContext);
    return (
        <div style={{ margin: 0 }}>
            {skillset.map((item, id) => (
                <div key={item.key}>
                    <CardText Dark={isDark}>
                        {item.skill}
                    </CardText>
                    <ProgressBar>
                        <ProgressPercent percent={item.percent} color={item.color}>
                            <CardSub Dark='true'>{item.percent}%</CardSub>
                        </ProgressPercent>
                    </ProgressBar>
                </div>
            ))}
        </div>
    );
}

export default SkillSet;