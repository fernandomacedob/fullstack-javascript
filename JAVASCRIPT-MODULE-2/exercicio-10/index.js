const jobs = []

function listJobs() {
    const jobsInText = jobs.reduce(function (finalText, job, index) {
        // 1. name, (x candidates)
        finalText += index + ". "
        finalText += job.firstName
        finalText += " (" + job.candidates.length + " candidates)\n"
        return finalText
    }, "")

    alert(jobsInText)
}

function newJob() {
    const firstName = prompt("Tye the name of the job:")
    const description = prompt("Type the description of the job:")
    const timeLimit = prompt("Type the date limit of the job (mm/dd/yyyy):")

    const confirmation = confirm(
        "Do you want to create a new job posting with this information?\n" +
        "Name: " + firstName + "\nDescription: " + description + "\nDeadline: " + timeLimit
    )

    if (confirmation) {
        const newJob = { firstName, description, timeLimit, candidates: []}
        jobs.push(newJob)
        alert("Job created")

    }   
}

function showJob() {
    const index = prompt("Type the job index you want to show:")
    
    if (index >= jobs.length || index < 0) {
        alert("Invalid index")
        return
    } 

    const job = jobs[index]

    const candidatesInText = job.candidates.reduce(function (finalText, candidate) {
        return finalText + "\n- " + candidate
    }, "")

    alert(
        "Job nº " + index + 
        "\nName: " + job.firstName + 
        "\nDescription: " + job.description + 
        "\nTime Limite: " + job.timeLimit +
        "\nQuantity of candidates: " + job.candidates.length +
        "\nCandidates registered: " + candidatesInText
    )
}

function registerCandidate() {
    const candidate = prompt("Type the name of the candidate:")
    const index = prompt("Type the index of the job the candidate want to register:")
    const job = jobs[index]

    const confirmation = confirm(
        "Do you want to register the candidate " + candidate + " in the job " + index + "?\n" +
        "Name: " + job.firstName + "\nDescription: " + job.description + "\nTime Limit: " + job.timeLimit
    )

    if (confirmation) {
        job.candidates.push(candidate)
        alert("Register concluded")
    }
}

function deleteJob() {
    const index = prompt("Type the index of the job you want to delete:")
    const job = jobs[index]

    const confirmation = confirm(
        "Do you want to delete the job " + index + "?\n" +
        "Name: " + job.firstName + "\nDescription: " + job.description + "\nTime Limit: " + job.timeLimit
    )

    if (confirmation) {
        jobs.splice(index, 1)
        alert("Job deleted")
    }
}

function showMenu() {
    const option = prompt(
        "Job Vacancy Registration" +
        "\n\nChoose an option:" +
        "\n1. List all job postings" +
        "\n2. Create a new job posting" +
        "\n3. Show a job posting" +
        "\n4. Register a candidate to a job" +
        "\n5. Delete a job posting" +
        "\n6. Exit"
    )

    return option
}

function execute() {
    let option = ""

    do {
        option = showMenu()

        switch (option) {
            case "1":
                listJobs()
                break
            case "2":
                newJob()
                break
            case "3":
                showJob()
                break
            case "4":
                registerCandidate()
                break
            case "5":
                deleteJob()
                break
            case "6":
                alert("Exiting...")
                break
            default:
                alert("Invalid option. Try again.")
        }
    } while (option !== "6")
}

execute()





