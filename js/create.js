
async function init(accounts = []){
    if (accounts.length === 0){
        document.querySelector('#walletDetails').innerText = 'Get Web3';
    }
    else{
        document.querySelector('#walletDetails').innerText = trimAddress(accounts[0]);
        document.querySelector('#walletDetails').addEventListener("click", copyAddress(document.querySelector('#walletDetails'), accounts[0]));
    }
}


function create(e){
    if(e){
        e.preventDefault();
    }

    if(document.querySelector('#inp_name').value === '' ||
    document.querySelector('#inp_sym').value === '' ||
    document.querySelector('#inp_cap').value === '' ||
    document.querySelector('#inp_blob').value === ''
    ){
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Submission',
            html: `Some values seem to be empty`,
        });
    }
    else{
        let createBtn = document.querySelector('#createBtn');
        createBtn.innerText = "Aww Yuss";
        createBtn.classList.add('disabled');
        createDataToken(
            document.querySelector('#inp_name').value,
            document.querySelector('#inp_sym').value,
            document.querySelector('#inp_cap').value,
            document.querySelector('#inp_blob').value,
        ).then(()=>{
            createBtn.innerText = "Txn is being Mined...";
        }).catch((e)=>{
            alert(e.message);
            createBtn.classList.remove('disabled');
            createBtn.innerText = "Create";
        });
    }

}

function clearInput(){
    document.querySelector('#inp_name').value = '';
    document.querySelector('#inp_sym').value = '';
    document.querySelector('#inp_cap').value = '';
    document.querySelector('#inp_blob').value = '';
}
