import NewsFeedIcon from "@public/icons/news-feed.svg"
import BadgesIcon from "@public/icons/badges.svg"
import EventsIcon from "@public/icons/events.svg"
import GroupsIcon from "@public/icons/groups.svg"
import MembersIcon from "@public/icons/members.svg"
import OverviewIcon from "@public/icons/overview.svg"
import QuestsIcon from "@public/icons/quests.svg"
import StreamsIcon from "@public/icons/strems.svg"
import ForumsIcon from "@public/icons/forums.svg"
import MarketplaceIcon from "@public/icons/marketplace.svg"
import ProfileIcon from "@public/icons/profile.svg"
import StoreIcon from "@public/icons/store.svg"
import SettingIcon from "@public/icons/setting.svg"

import { IconType } from "react-icons"
export const navigationSidebarIcons: NavItemProps[] = [
  { href: "/social/newsfeed", title: "newsfeed", Icon: NewsFeedIcon },
  { href: "/social/overview", title: "overview", Icon: OverviewIcon },
  { href: "/social/groups", title: "groups", Icon: GroupsIcon },
  { href: "/social/members", title: "members", Icon: MembersIcon },
  { href: "/social/badges", title: "badges", Icon: BadgesIcon },
  { href: "/social/quests", title: "quests", Icon: QuestsIcon },
  { href: "/social/streams", title: "streams", Icon: StreamsIcon },
  { href: "/social/events", title: "events", Icon: EventsIcon },
  { href: "/social/forums", title: "forums", Icon: ForumsIcon },
  { href: "/social/marketplace", title: "marketplace", Icon: MarketplaceIcon }
]

export interface NavItemProps {
  href: string
  title: string
  Icon: IconType
}

export interface globalState {
  darkMode: boolean
  lang: string
  setDarkMode: (darkMode: boolean) => void
  setLang: (lang: string) => void
  leftBarStatus: boolean
  setLeftBarStatus: (status: boolean) => void
  rightBarStatus: boolean
  setRightBarStatus: (status: boolean) => void
}

export const settingsNavItems = [
  {
    id: 0,
    groupTitle: "my profile",
    Icon: ProfileIcon,
    description: "change your avatar & cover, accept friends, read messages and more!",
    children: [
      {
        id: 0,
        href: "/settings/my_profile/profile_info",
        title: "profile info"
      },
      {
        id: 1,
        href: "/settings/my_profile/social_and_stream",
        title: "social & stream"
      },
      {
        id: 2,
        href: "/settings/my_profile/notifications",
        title: "notifications"
      },
      { id: 3, href: "/settings/my_profile/messages", title: "messages" },
      {
        id: 4,
        href: "/settings/my_profile/friend_requests",
        title: "friend requests"
      }
    ]
  },
  {
    id: 1,
    groupTitle: "account",
    Icon: SettingIcon,
    description: "change settings, configure notifications, and review your privacy",
    children: [
      { id: 0, href: "/settings/account/account_info", title: "account info" },
      {
        id: 1,
        href: "/settings/account/change_password",
        title: "change password"
      },
      {
        id: 2,
        href: "/settings/account/general_settings",
        title: "general settings"
      }
    ]
  },
  {
    id: 2,
    groupTitle: "groups",
    Icon: GroupsIcon,
    description: "create new groups, manage the ones you created or accept invites!",
    children: [
      { id: 0, href: "/settings/groups/manage_groups", title: "manage groups" },
      { id: 1, href: "/settings/groups/invitations", title: "invitations" }
    ]
  },
  {
    id: 3,
    groupTitle: "my store",
    Icon: StoreIcon,
    description: "review your account, manage products check stats and much more!",
    children: [
      {
        id: 0,
        href: "/settings/my_store/my_account",
        title: "my account",
        ExtraText: "$250.30"
      },
      {
        id: 1,
        href: "/settings/my_store/sales_statement",
        title: "sales statement"
      },
      { id: 2, href: "/settings/my_store/manage_items", title: "manage items" },
      { id: 3, href: "/settings/my_store/downloads", title: "downloads" }
    ]
  }
]
