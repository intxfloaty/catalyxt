/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MWro5IXa4b6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-preview"

export default function Component() {
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: "Learn Python",
      updates: [
        ">> Completed chapter 3 of the Python Crash Course book.",
        ">> Practiced writing functions and handling user input.",
        ">> Researched Python libraries for data analysis.",
      ],
    },
    {
      id: 2,
      title: "Build a SaaS Product",
      updates: [
        "-- Finalized the product roadmap and feature list.",
        "-- Designed the user interface and wireframed the app.",
        "-- Started coding the backend API using Node.js and Express.",
      ],
    },
    {
      id: 3,
      title: "Learn the Piano",
      updates: [
        ">> Practiced scales and arpeggios for 30 minutes.",
        ">> Worked on playing Beethoven's Moonlight Sonata.",
        ">> Watched a tutorial on proper piano posture and technique.",
      ],
    },
    {
      id: 4,
      title: "Train for a 10K Run",
      updates: [
        ">> Went for a 5-mile run and felt great.",
        ">> Stretched and did some core exercises.",
        ">> Researched training plans for 10K runs.",
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
      <div className="flex h-full pt-0">
        <div className="w-64 bg-card text-card-foreground border-r">
          <div className="h-full flex flex-col">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-bold">Menu</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Link href="#" className="block px-6 py-3 hover:bg-accent hover:text-accent-foreground" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="block px-6 py-3 hover:bg-accent hover:text-accent-foreground" prefetch={false}>
                Projects
              </Link>
              <Link href="#" className="block px-6 py-3 hover:bg-accent hover:text-accent-foreground" prefetch={false}>
                Settings
              </Link>
              <Link href="#" className="block px-6 py-3 hover:bg-accent hover:text-accent-foreground" prefetch={false}>
                Help
              </Link>
              {/* <ModeToggle /> */}
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-6 pt-0">
          <div className="grid gap-6">
            {tracks.map((track) => (
              <Card key={track.id} className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle>{track.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {track.updates.map((update, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {/* <div className="text-primary font-medium"></div> */}
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
    </div>
  )
}