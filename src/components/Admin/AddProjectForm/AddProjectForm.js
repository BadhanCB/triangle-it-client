import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProjectForm = () => {
    const [project, setProject] = useState({
        projectName: "",
        liveUrl: "",
        githubUrl: "",
        isFeatured: false,
    });
    const [imageFile, setImageFile] = useState(null);
    const [previewImg, setPreviewImg] = useState(undefined);
    const [isSendingData, setIsSendingData] = useState(false);
    const history = useHistory();

    const handleInput = (e) => {
        const newProject = { ...project };

        if (e.target.name === "isFeatured") {
            newProject[e.target.name] = e.target.checked;
        } else {
            newProject[e.target.name] = e.target.value;
        }

        setProject(newProject);
    };

    const handleImgInput = (e) => {
        const newFile = e.target.files[0];
        setImageFile(newFile);

        const newUrl = URL.createObjectURL(newFile);
        newUrl !== null ? setPreviewImg(newUrl) : setPreviewImg(undefined);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSendingData(true);

        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("projectName", project.projectName);
        formData.append("liveUrl", project.liveUrl);
        formData.append("githubUrl", project.githubUrl);
        formData.append("isFeatured", project.isFeatured);

        fetch("https://cryptic-waters-19850.herokuapp.com/add-project", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                setIsSendingData(false);
                if (result) {
                    alert("Added SuccessFully");
                    history.push('/admin/manageproject');
                } else {
                    alert("Failed to add Service");
                }
            })
            .catch((error) => {
                alert(error);
                setIsSendingData(false);
            });
    };

    return (
        <div className="col-lg-9 col-md-8 col-sm-12 p-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="projectName" className="form-label">
                        Project Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="projectName"
                        name="projectName"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="liveUrl" className="form-label">
                        Live Url
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="liveUrl"
                        name="liveUrl"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="githubUrl" className="form-label">
                        GitHub Url
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="githubUrl"
                        name="githubUrl"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div class="mb-3">
                    <label htmlFor="projectImg" class="form-label">
                        Project Image
                    </label>
                    {previewImg && (
                        <div className="w-50">
                            <img
                                src={previewImg}
                                alt="previewImg"
                                className="img-fluid d-block my-3"
                            />
                        </div>
                    )}
                    <input
                        class="form-control"
                        type="file"
                        id="projectImg"
                        name="projectImg"
                        required
                        onChange={handleImgInput}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="isFeatured"
                        name="isFeatured"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="isFeatured">
                        Featured Project
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSendingData}
                >
                    {isSendingData ? (
                        <>
                            <span
                                class="spinner-grow spinner-grow-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Sending...
                        </>
                    ) : (
                        "Submit"
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddProjectForm;
