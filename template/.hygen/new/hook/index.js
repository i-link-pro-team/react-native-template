module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'hook_name',
        message: 'What is the hook name?'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory (skip for generate hook to services/hooks or enter atomicFolder/componentName )',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { hook_name, dir } = answers
        const absPath = `src/${ dir ? `components/${dir}/` : `services/hooks/` }${hook_name}`
        return { ...answers, absPath }
      })
  }
}
