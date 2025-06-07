import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Upload from "./Upload";
import { createSubsection } from "../../Operations/course";

function SubSection({ sectionId,setLeastOne }) {
    const { handleSubmit, register, setValue, getValues, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    async function onSubmit(data) {
        console.log(sectionId, data);
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        formData.append('sectionId', sectionId);
        dispatch(createSubsection(formData));
        setLeastOne(1);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2 bg-slate-800 px-1 py-4 rounded-xl">
                <input
                    placeholder="Enter title of course"
                    className={`p-2 bg-gray-600 rounded-xl`}
                    {...register("title", { required: true })} />
                {errors.title && (<div className="text-red-200 bg-gray-700"> Enter the title </div>)}
                <input
                    placeholder="Enter description of course"
                    className={`p-2 bg-gray-600 rounded-xl`}
                    {...register("description", { required: true })} />
                {errors.description && (<div className="text-red-200 bg-gray-700"> Enter the Description </div>)}
                <input
                    placeholder="Enter time duration of course"
                    className={`p-2 bg-gray-600 rounded-xl`}
                    {...register("timeDuration", { required: true })} />
                {errors.timeDuration && (<div className="text-red-200 bg-gray-700"> Enter the Time Duration </div>)}
                <div className={`min-w-80 flex justify-center`}>
                    <Upload
                        name="video"
                        label="Course Video"
                        register={register}
                        setValue={setValue}
                        errors={errors}
                        video={true}
                    />
                </div>
                <div className="flex gap-1">
                    <button type="submit" className="mb-2 bg-yellow-400 w-fit text-black font-semibold p-1 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200">
                        Create Subsection
                    </button>
                  
                </div>
            </form>
        </>
    );
}

export default SubSection;
