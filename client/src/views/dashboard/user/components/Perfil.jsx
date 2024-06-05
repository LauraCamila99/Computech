// import React, { useEffect, useState } from 'react';

// import { useFirebase } from '../../../../firebase/firebase'; // Importa el hook useFirebase
// import Edit from './Edit'

// const Perfil = ({ isOpen, onClose }) => {
//     const [editMode, setEditMode] = useState(false);
//     const { auth } = useFirebase(); // Obtén la instancia de autenticación de Firebase
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//           if (user) {
//             setUser(user);
//             setIsLoading(false);
//           }
//         });

//      console.log('user desde dashboard :', user)

//     // const [perfilInfo, setPerfilInfo] = useState({
//     //     //Inicializo el estado hasta esperar el back
//     //     photoURL:user.photoURL,
//     //     name: user.displayName,
//     //     address: '',
//     //     phoneNumber: user.phoneNumber,
//     //     email: user.email,
//     //     image:'https://res.cloudinary.com/damfsltm2/image/upload/v1716826731/Computech-Products/favicon_chnb9k.png'

//     // });

//     // Función para manejar cambios en los campos del formulario
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPerfilInfo({ ...perfilInfo, [name]: value });
//     };

//     // Función para activar el modo de edición
//     const handleEdit = () => {
//         setEditMode(true);
//     };

//     // Función para guardar los cambios realizados en el perfil
//     const handleSave = () => {
//         // Aquí puedes agregar lógica para guardar los cambios en la base de datos
//         setEditMode(false);
//     };

//     return () => unsubscribe();
//   }, [auth]);

//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }

//   return(

//         <div
//         className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}
//         >
//         <div className="dark:text-white  w-96 p-6 rounded-lg shadow-lg">
//             <div className="grid grid-cols-1 mt-10 gap-8 lg:grid-cols-1" >
//                 <form className="p-8 rounded-xl shadow-2xl mb-8 flex flex-col dark:bg-gray-800 md:py-5">
//                     <div className='pb-6 flex items-center justify-center'>
//                         <img src={perfilInfo?perfilInfo.photoURL:'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'} className=" w-20 h-20 object-cover rounded-full ring-2 ring-gray-300" />
//                     </div>
//                 <label className="block text-2xl font-bold mb-2 font- text-gray-900 dark:text-white"></label>
//                     <div className="grid mb-6 md:grid-cols-1 lg:grid-cols-1">
//                         <div className=''>
//                             <Edit editMode={editMode} setEditMode={setEditMode}/>
//                         </div>
//                     <label className="block text-2xl font-bold mb-2  font- text-gray-900 dark:text-white">Datos actuales</label>
//                         <label>{perfilInfo?perfilInfo.name:'Nombre de usuario'}</label>
//                             {
//                             editMode?<input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.nombre:'Nombre de usuario'} required />:null
//                              }
//                         <label>{perfilInfo?perfilInfo.address:'Dirección de usuario'}</label>
//                             {
//                             editMode?<input type="text" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.direccion:'Dirección de usuario'} required />:null
//                             }
//                         <label>{perfilInfo?perfilInfo.email:'Correo de usuario'}</label>
//                         {
//                             editMode?<input type="text" id="mail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.correo:'Correo de usuario'} required />:null
//                         }
//                         <label>{perfilInfo?perfilInfo.phoneNumber:'Teléfono de usuario'}</label>
//                         {
//                             editMode?<input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={perfilInfo?perfilInfo.telefono:'Teléfono de usuario'} required />:null
//                         }
//                     </div>
//                         <label className="block text-2xl font-bold mb-2  font- text-gray-900 dark:text-white">Modificar contraseña</label>
//             <div className="mb-6">
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
//             </div>
//             <div className="mb-6 ">
//                 <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                 <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
//             </div>
//             <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
//             <button onClick={onClose} className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancelar</button>
//         </form>

//         </div>
//         </div>

//        </div>
//   );
// };

// export default Perfil;

import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../firebase/firebase"; // Importa el hook useFirebase
import Edit from "./Edit";
import Swal from "sweetalert2";
import Spinner from "../../../../components/spinner/Spinner";
import axios from "axios";
import { updateCurrentUser } from "firebase/auth";
import { updateDataUser } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Perfil = ({ isOpen, onClose, currentUser }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState(false);
	const { auth } = useFirebase(); // Obtén la instancia de autenticación de Firebase
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Cloudinary
	const preset = "presetComputech";
	const cloudName = "damfsltm2";
	const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

	const [url_imgs, setUrl_img] = useState("");

	const changeUploadImage = async (e) => {
		const files = Array.from(e.target.files);
		const urls = [];

		for (const file of files) {
			const data = new FormData();
			data.append("file", file);
			data.append("upload_preset", preset);

			try {
				const response = await axios.post(url, data);
				urls.push(response.data.secure_url);
			} catch (error) {
				Swal.fire("Error al subir la imagen");
				console.error(error);
			}
		}

		setUrl_img(urls);
		setPerfilInfo({ ...perfilInfo, image: urls[0] });
	};
	const [perfilInfo, setPerfilInfo] = useState({
		name: "",
		address: "",
		phone: "",
		image: url_imgs
	});

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userData) => {
			if (userData) {
				setUser(user);

				setIsLoading(false);
			} else {
				setIsLoading(false); // Si no hay usuario, deja de cargar
			}
		});

		return () => unsubscribe();
	}, [auth]);
	//guardo el id del usuario para pasarlo por parametro al updateDataUser
	const id_User = currentUser?.id_User;
	//handler para enviar el update al back
	const handleSave = async () => {
		try {
			dispatch(updateDataUser(id_User, perfilInfo));
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Informacion actualiazada correctamente",
				showConfirmButton: true,
				confirmButtonText: "volver al home"
			}).then((result) => {
				if (result.isConfirmed) {
					onClose();
					navigate("/");
				}
			});
		} catch (error) {
			console.error("Error updating profile:", error);
			// Manejar el error (por ejemplo, mostrar una notificación al usuario)
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPerfilInfo({ ...perfilInfo, [name]: value });
	};

	const handleEdit = () => {
		setEditMode(true);
	};

	/*     if (isLoading) {
        return <Spinner className=''/>;;
    } */

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
				isOpen ? "" : "hidden"
			}`}
		>
			<div className="dark:text-white w-96 p-6 rounded-lg shadow-lg">
				<div className="grid grid-cols-1 mt-10 gap-8 lg:grid-cols-1">
					<form className="p-8 rounded-xl shadow-2xl mb-8 flex flex-col dark:bg-gray-800 md:py-5">
						<label className="text-center block text-2xl font-bold mb-2 text-gray-900 dark:text-white">
							Datos actuales
						</label>
						<div className="absolute flex fle-end">
							<Edit editMode={editMode} setEditMode={setEditMode} />
						</div>
						<div className="pb-6 flex items-center justify-around">
							<img
								src={
									currentUser?.image ||
									"https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
								}
								className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
							/>
							{editMode && (
								<input
									type="file"
									accept="image/*"
									id="image"
									name="image"
									onChange={changeUploadImage}
									className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500  dark:text-gray-300 dark:border-gray-600"
								/>
							)}
						</div>
						<div className="grid mb-6 md:grid-cols-1 lg:grid-cols-1">
							<label>
								{currentUser?.mail || (
									<p className="text-red-500 font-bold">'Ingresa un correo'</p>
								)}
							</label>
							<label>{currentUser?.name || "Nombre de usuario"}</label>
							{editMode && (
								<input
									type="text"
									name="name"
									value={perfilInfo.name}
									onChange={handleChange}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Nombre de usuario"
									required
								/>
							)}
							<label>
								{currentUser?.address || (
									<p className="text-red-500 font-bold">
										'Ingresa una dirección de envío'
									</p>
								)}
							</label>
							{editMode && (
								<input
									type="text"
									name="address"
									value={perfilInfo.address}
									onChange={handleChange}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Dirección de usuario"
									required
								/>
							)}
							<label>
								{currentUser?.phone || (
									<p className="text-red-500 font-bold">
										'Ingresa un número de teléfono'
									</p>
								)}
							</label>
							{editMode && (
								<input
									type="text"
									name="phone"
									value={perfilInfo.phone}
									onChange={handleChange}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Teléfono de usuario"
									required
								/>
							)}
						</div>
						<button
							type="button"
							onClick={handleSave}
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Guardar
						</button>
						<button
							type="button"
							onClick={onClose}
							className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Cancelar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Perfil;
