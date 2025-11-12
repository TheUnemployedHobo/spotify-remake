"use client"

import type { PropsWithChildren } from "react"

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

function PlaylistTable({ children }: PropsWithChildren) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pl-5">#</TableHead>
          <TableHead>Song</TableHead>
          <TableHead className="hidden sm:table-cell">Genre</TableHead>
          <TableHead>More</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  )
}

export default PlaylistTable
