import React from 'react'
import GitHubCalendar from 'react-github-calendar'

function GithubContribute() {
  return (
    <div className="p-8  w-full  lg:w-full flex justify-center">
    <GitHubCalendar
      username="ubaidahmed04"
      blockMargin={8}
      blockRadius={100}

      // blockSize={5}
      colorScheme={"light"}
    />
  </div>
      )
}

export default GithubContribute