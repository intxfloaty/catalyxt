/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j4vrwKwC6b8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function TrackComponent() {
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: "Learn Python",
      updates: [
        "> Completed chapter 3 of the Python Crash Course book.",
        "> Practiced writing functions and handling user input.",
        "> Researched Python libraries for data analysis.",
      ],
    },
    {
      id: 2,
      title: "Build a SaaS Product",
      updates: [
        "> Finalized the product roadmap and feature list.",
        "> Designed the user interface and wireframed the app.",
        "> Started coding the backend API using Node.js and Express.",
      ],
    },
    {
      id: 3,
      title: "Learn the Piano",
      updates: [
        "> Practiced scales and arpeggios for 30 minutes.",
        "> Worked on playing Beethoven's Moonlight Sonata.",
        "> Watched a tutorial on proper piano posture and technique.",
      ],
    },
    {
      id: 4,
      title: "Train for a 10K Run",
      updates: [
        "> Went for a 5-mile run and felt great.",
        "> Stretched and did some core exercises.",
        "> Researched training plans for 10K runs.",
      ],
    },
  ])
  const [newTrackTitle, setNewTrackTitle] = useState("")
  const [newTrackUpdate, setNewTrackUpdate] = useState("")
  const addNewTrack = () => {
    if (newTrackTitle.trim() !== "") {
      setTracks([
        ...tracks,
        {
          id: tracks.length + 1,
          title: newTrackTitle,
          updates: [newTrackUpdate],
        },
      ])
      setNewTrackTitle("")
      setNewTrackUpdate("")
    }
  }
  const addUpdateToTrack = (trackId) => {
    if (newTrackUpdate.trim() !== "") {
      setTracks(
        tracks.map((track) =>
          track.id === trackId ? { ...track, updates: [...track.updates, newTrackUpdate] } : track,
        ),
      )
      setNewTrackUpdate("")
    }
  }
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Activity Tracker</h1>
        <div className="flex items-center gap-4">
          <Input
            value={newTrackTitle}
            onChange={(e) => setNewTrackTitle(e.target.value)}
            placeholder="New Track"
            className="bg-primary-foreground text-primary border-none focus:ring-0 focus:border-none"
          />
          <Button onClick={addNewTrack}>Add Track</Button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-6">
          {tracks.map((track) => (
            <Card key={track.id} className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>{track.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {track.updates.map((update, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="text-primary font-medium"></div>
                    <div>{update}</div>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <Input
                    value={newTrackUpdate}
                    onChange={(e) => setNewTrackUpdate(e.target.value)}
                    placeholder="Add update"
                    className="bg-card text-card-foreground border-none focus:ring-0 focus:border-none flex-1"
                  />
                  <Button onClick={() => addUpdateToTrack(track.id)}>Add</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}