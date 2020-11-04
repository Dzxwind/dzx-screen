import { reactive } from 'vue'
export default () => {
  const resumeList = reactive([
    {
      name: '下载',
      url: '/resume.pdf',
      icon: 'icon-download'
    }
  ])
  const downloadResume = (url) => {
    const fileName = '简历-杨子初.pdf'
    const link = document.createElement('a')
    link.download = fileName
    link.style.display = 'none'
    link.href = url
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return {
    resumeList,
    downloadResume
  }
} 