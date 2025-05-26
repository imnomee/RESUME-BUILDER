import Input from '../../components/inputs/Input';
import { LuPlus, LuTrash2 } from 'react-icons/lu';

const ProjectInfoForm = ({
    projectInfo,
    updateArrayItem,
    addArrayItem,
    removeArrayItem,
}) => {
    return (
        <div>
            <h2>Projects</h2>
            <div className="">
                {projectInfo.map((project, index) => (
                    <div key={index} className=""></div>
                ))}
            </div>
        </div>
    );
};

export default ProjectInfoForm;
