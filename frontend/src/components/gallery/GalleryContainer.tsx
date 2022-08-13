import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppInfo, selectApp } from '../../redux/slices/appSlice';
import { getAllFiles } from '../../requests/adminRequests';
import { BASE_URL } from '../../requests/routes';

function GalleryContainet() {
    const dispatch = useDispatch();

    const appInfo: AppInfo = useSelector(selectApp);

    useEffect(() => {
        if (!appInfo.files) {
            getAllFiles(dispatch);
        }
    }, []);

    return (
        <div className="w-full bg-orange-500 min-h-screen pt-10">
            <Link href="/">
                <p className="text-blue-300 hover:underline focus:underline">
                    Upload more
                </p>
            </Link>

            <div className="mt-10 grid grid-cols-3 place-content-center w-full overflow-hidden sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
                {appInfo.files &&
                    appInfo.files.map((file) => {
                        if (
                            !file.name.includes('.png') &&
                            !file.name.includes('.jpg') &&
                            !file.name.includes('.gif') &&
                            !file.name.includes('.jpeg') &&
                            !file.name.includes('.svg') &&
                            !file.name.includes('.webp')
                        ) {
                            return null;
                        }

                        return (
                            <div
                                className="w-full h-full flex items-center justify-center"
                                key={file.name}
                            >
                                <img
                                    src={`${BASE_URL}/${file.hash}`}
                                    className="object-cover w-full h-full"
                                    alt={file.name}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default GalleryContainet;
