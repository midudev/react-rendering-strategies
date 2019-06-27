import {MdShare} from 'react-icons/md'
import Button from 'components/Button'

export default function Share({title, url}) {
  const handleClick = e => {
    e.stopPropagation()
    e.preventDefault()

    if (navigator.share) {
      navigator
        .share({
          title,
          text: `Check out "${title}"`,
          url
        })
        .catch(err => console.error(err))
    } else {
      window.open(
        `https://twitter.com/intent/tweet?text=${title}%20${url}&via=midudev`,
        'Twitter',
        'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,width=550,height=285,resizable=1'
      )
    }
  }

  return (
    <Button onClick={handleClick}>
      <MdShare size="16px" />
      Share
    </Button>
  )
}
