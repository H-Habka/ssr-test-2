import NewsFeedIcon from "@public/icons/news-feed.svg";
import BadgesIcon from "@public/icons/badges.svg";
import EventsIcon from "@public/icons/events.svg";
import GroupsIcon from "@public/icons/groups.svg";
import MembersIcon from "@public/icons/members.svg";
import OverviewIcon from "@public/icons/overview.svg";
import QuestsIcon from "@public/icons/quests.svg";
import StreamsIcon from "@public/icons/strems.svg";
import ForumsIcon from "@public/icons/forums.svg";
import MarketplaceIcon from "@public/icons/marketplace.svg";
import { IconType } from "react-icons";

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
  { href: "/social/marketplace", title: "marketplace", Icon: MarketplaceIcon },
];

export interface NavItemProps {
  href: string;
  title: string;
  Icon: IconType;
}
