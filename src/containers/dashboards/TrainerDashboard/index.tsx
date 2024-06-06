import TrainerTable from '@/containers/tables/TrainerTable';
import ActivityForm from '@/containers/ActivityForm';

const TrainerDashboard = () => {
    return (
        <div className="flex flex-col items-center gap-4 pb-3 lg:w-[60%]">
            <TrainerTable />
            <ActivityForm />
        </div>
    );
};

export default TrainerDashboard;
