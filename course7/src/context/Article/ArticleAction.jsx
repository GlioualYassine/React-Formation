import Swal from 'sweetalert2'
import axios from "axios";
import { articleapi } from '../../axios';

    let api = process.env.REACT_APP_API_URL
export async function getallArticle(){
    let response = await articleapi.get()
   return response.data

}


export const deleteanArticle = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
                        
                try{
                    const response = await articleapi.delete(`/${id}`)
                    if(response.status === 200){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                }catch(error){
                    console.log(error)
                }


          
        }
        return false;
    })



}